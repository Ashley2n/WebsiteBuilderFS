const modalArea = document.querySelector("#card_modal_bg");
// const openTrigger = document.getElementsByClassName('modal_btn');
const closeBtn = document.querySelector("#close_btn");

// console.log(cardModal);
// console.log(openTrigger);
// console.log(closeBtn);
const cardModal = (triggerArr, data) => {
  for (let i = 0; i < triggerArr.length; i++) {
    triggerArr[i].onclick = (event) => {
      event.preventDefault();
      openModal();
      // console.log(triggerArr[i]);
      appendItems(data[i]);
    };
  }

  closeBtn.onclick = (e) => {
    e.preventDefault();
    modalArea.style.display = "none";
    document.body.style.overflowY = "visible";
  };

  window.onclick = (event) => {
    if (event.target === modalArea) {
      modalArea.style.display = "none";
      document.body.style.overflowY = "visible";
    }
  };
};

const openModal = () => {
  modalArea.style.display = "flex";
  document.body.style.overflowY = "hidden";
  document.body.style.backgroundColor = "black";
};

const getItemById = (data, index) => {
  return data[index];
};

const appendItems = (item) => {
  //   console.log(item);
  const parentContianer = document.querySelector("#content_contianer");
  document.querySelector("#card_modal").querySelector("h2").innerHTML =
    item.name;

  document.querySelector("#modal_content").querySelector("img").src =
    item.image;
  document.querySelector("#modal_content").querySelector("img").alt = item.name;

  parentContianer.querySelector('.rarity > strong').innerHTML = item.rarity;

  parentContianer.querySelector("#elixir > strong").innerHTML = item.elixir;

  parentContianer.querySelector("#type > strong").innerHTML = item.type;

  parentContianer.querySelector("#arena > strong").innerHTML = item.arena;
  parentContianer.querySelector("#damage  > strong").innerHTML =
    item.stat.damage;
  parentContianer.querySelector("#dps > strong").innerHTML = item.stat.dps;
  parentContianer.querySelector("#hitpoints > strong").innerHTML =
    item.stat.hitpoints;
  parentContianer.querySelector("#hit_speed > strong").innerHTML =
    item.stat.hit_speed;
  parentContianer.querySelector("#speed > strong").innerHTML =
    item.stat.speed;
  parentContianer.querySelector("#target > strong").innerHTML =
    item.stat.targets;
  parentContianer.querySelector("#range > strong").innerHTML =
    item.stat.range;
};

export default cardModal;
