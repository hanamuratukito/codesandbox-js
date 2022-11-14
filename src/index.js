import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグを削除する
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const completeLi = document.createElement("li");
    completeLi.innerText = text;

    // button（戻す）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了リストから削除
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode);

      // テキストを取得
      const backTarget = backButton.parentNode;
      const text = backTarget.firstElementChild.innerText;

      createIncompleteList(text);
    });

    addTarget.appendChild(completeLi);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
