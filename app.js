/* =========================================================
   app.js  —  出題ロジック
========================================================= */
(function () {
  "use strict";

  var STORE_KEY = "kanshishitsu_v1";

  // ---- 永続データ（localStorage、使えなければメモリのみ） ----
  var mem = { answered: 0, correct: 0, streak: 0, best: 0, wrong: [] };
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) mem = Object.assign(mem, JSON.parse(raw));
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(mem)); } catch (e) {}
  }
  var wrongSet = null; // Set of ids

  // ---- 状態 ----
  var state = {
    subject: "法規",
    queue: [],
    pos: 0,
    locked: false
  };

  // ---- DOM ----
  var $ = function (id) { return document.getElementById(id); };
  var el = {};

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pool() {
    return QUESTIONS.filter(function (q) { return q.subject === state.subject; });
  }

  function buildQueue() {
    state.queue = shuffle(pool().slice());
    state.pos = 0;
  }

  // ---- 統計バー ----
  function renderStats() {
    var rate = mem.answered ? Math.round((mem.correct / mem.answered) * 100) : 0;
    $("stAnswered").textContent = mem.answered;
    $("stRate").textContent = rate + "%";
    $("stStreak").textContent = mem.streak;
    $("stBest").textContent = mem.best;
  }

  // ---- 出題 ----
  function render() {
    state.locked = false;
    renderStats();

    var q = state.queue[state.pos];
    var card = $("card");

    if (!q) {
      // 出題対象なし
      card.innerHTML =
        '<div class="empty"><b>出題できる問題がありません</b><br>' +
        "この科目の問題はまだ登録されていません。</div>";
      return;
    }

    // カード再生成（アニメーション用に置き換え）
    var isOx = q.type === "ox";
    var typeLabel = isOx ? "○×問題" : "選択問題";
    var total = state.queue.length;
    var idx = state.pos + 1;

    var html = "";
    html += '<div class="card__meta">';
    html += '<span class="chip">' + esc(q.subject) + (q.topic ? " ／ " + esc(q.topic) : "") + "</span>";
    html += '<span class="chip chip--type">' + typeLabel + "</span>";
    html += '<span class="qno">' + idx + " / " + total + "</span>";
    html += "</div>";
    html += '<p class="qtext">' + esc(q.question) + "</p>";

    if (isOx) {
      html += '<div class="answers ox" id="answers">';
      html += '<button class="ans" data-i="0"><span>○ 正しい</span></button>';
      html += '<button class="ans" data-i="1"><span>× 誤り</span></button>';
      html += "</div>";
    } else {
      html += '<div class="answers" id="answers">';
      for (var i = 0; i < q.choices.length; i++) {
        var mk = String.fromCharCode(65 + i); // A,B,C
        html += ansBtn(mk, i, q.choices[i]);
      }
      html += "</div>";
    }

    html += '<div class="verdict" id="verdict"><span class="lamp"></span><span id="verdictText"></span></div>';
    html += '<div class="explain" id="explain"><span class="lab">解説</span><span id="explainText"></span></div>';

    html += '<div class="controls" style="margin-top:18px;">';
    html += '<button class="btn btn--primary" id="nextBtn">次の問題 →</button>';
    html += '<span class="spacer"></span>';
    html += "</div>";

    // 差し替え（アニメ再実行）
    var fresh = card.cloneNode(false);
    fresh.innerHTML = html;
    card.parentNode.replaceChild(fresh, card);

    // イベント
    var btns = fresh.querySelectorAll(".ans");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () { answer(parseInt(b.dataset.i, 10)); });
    });
    fresh.querySelector("#nextBtn").addEventListener("click", next);
  }

  function ansBtn(mark, i, label) {
    return (
      '<button class="ans" data-i="' + i + '">' +
      '<span class="mark">' + esc(mark) + "</span>" +
      "<span>" + esc(label) + "</span></button>"
    );
  }

  // ---- 回答処理 ----
  function answer(choice) {
    if (state.locked) return;
    state.locked = true;

    var q = state.queue[state.pos];
    var correctIdx = q.type === "ox" ? (q.answer ? 0 : 1) : q.answer;
    var isCorrect = choice === correctIdx;

    // ボタン表示
    var btns = document.querySelectorAll(".ans");
    Array.prototype.forEach.call(btns, function (b) {
      var i = parseInt(b.dataset.i, 10);
      b.disabled = true;
      if (i === correctIdx) b.classList.add("correct");
      else if (i === choice) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    // 判定表示
    var v = document.getElementById("verdict");
    v.classList.add(isCorrect ? "ok" : "ng");
    v.style.display = "flex";
    document.getElementById("verdictText").textContent =
      isCorrect ? "正解" : "不正解";

    // 解説表示
    var ex = document.getElementById("explain");
    ex.style.display = "block";
    document.getElementById("explainText").textContent = q.explanation || "";

    // 次へボタン
    document.getElementById("nextBtn").style.display = "inline-block";

    // 統計更新
    mem.answered++;
    if (isCorrect) {
      mem.correct++;
      mem.streak++;
      if (mem.streak > mem.best) mem.best = mem.streak;
      wrongSet.delete(q.id);
    } else {
      mem.streak = 0;
      wrongSet.add(q.id);
    }
    mem.wrong = Array.from(wrongSet);
    save();
    renderStats();
  }

  function next() {
    state.pos++;
    if (state.pos >= state.queue.length) buildQueue(); // 一巡したら再シャッフル
    render();
  }

  // ---- 科目タブ ----
  function selectSubject(sub) {
    state.subject = sub;
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      t.setAttribute("aria-selected", t.dataset.sub === sub ? "true" : "false");
    });
    buildQueue();
    render();
  }

  // ---- リセット ----
  function resetStats() {
    if (!confirm("学習記録（出題数・正答率・連続正解・苦手問題）をすべて消去します。よろしいですか？")) return;
    mem = { answered: 0, correct: 0, streak: 0, best: 0, wrong: [] };
    wrongSet = new Set();
    save();
    buildQueue();
    render();
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---- 初期化 ----
  function init() {
    load();
    wrongSet = new Set(mem.wrong || []);

    // タブ
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      if (t.disabled) return;
      t.addEventListener("click", function () { selectSubject(t.dataset.sub); });
    });
    // リセット
    var rb = $("resetBtn");
    if (rb) rb.addEventListener("click", resetStats);

    renderStats();
    buildQueue();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
