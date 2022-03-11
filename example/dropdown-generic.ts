interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const _emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const _numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function _createDropdownItem<T>(item: DropdownItem<T>): HTMLOptionElement {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
_emails.forEach(function (email) {
  const item = _createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

_numberOfProducts.forEach(function (prd) {
  const item = _createDropdownItem<number>(prd);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});