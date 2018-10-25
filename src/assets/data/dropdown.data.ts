import { Dropdown } from '../../app/common/models/dropdown.model';

export const OneLevelDropdownData: Dropdown = { 
  btnLabel: 'One Level',
  possition: 'bottom',
  outerClassList: ['top-control-outer'],
  labelClassList: ['top-control-btn'],
  dropdownClassList: ['one-level-dropdown'],
  collapsed: false,
  dropdownItems: [
    { btnLabel: 'Test one' },
    { btnLabel: 'Test two' },
    { btnLabel: 'Test three' },
    { btnLabel: 'Test four' },
    { btnLabel: 'Test five' },
  ]
};

export const TwoLevelsDropdownData: Dropdown = { 
  btnLabel: 'Two Levels',
  possition: 'bottom',
  outerClassList: ['top-control-outer'],
  labelClassList: ['top-control-btn', 'highlight'],
  dropdownClassList: ['one-level-dropdown'],
  collapsed: false,
  hasSublevel: true,
  dropdownItems: [
    { btnLabel: 'Test one', labelClassList: ['highlight'] },
    { 
      btnLabel: 'Test two',
      possition: 'right',
      collapsable: true,
      collapsed: false,
      hasSublevel: false,
      dropdownClassList: [],
      dropdownItems: [
        { btnLabel: 'SubLevel 1' },
        { btnLabel: 'SubLevel 2' },
        { btnLabel: 'SubLevel 3' },
        { btnLabel: 'SubLevel 4' },
        { btnLabel: 'SubLevel 5' },
        { btnLabel: 'SubLevel 1' },
        { btnLabel: 'SubLevel 2' },
        { btnLabel: 'SubLevel 3' },
        { btnLabel: 'SubLevel 4' },
        { btnLabel: 'SubLevel 5' },
        { btnLabel: 'SubLevel 1' },
        { btnLabel: 'SubLevel 2' },
        { btnLabel: 'SubLevel 3' },
        { btnLabel: 'SubLevel 4' },
        { btnLabel: 'SubLevel 5' }
      ]
    },
    { 
      btnLabel: 'Test three',
      possition: 'right',
      collapsable: true,
      collapsed: true,
      hasSublevel: false,
      dropdownItems: [
        { btnLabel: 'SubLevel 11' },
        { btnLabel: 'SubLevel 2222222' },
        { btnLabel: 'SubLevel 33' },
        { btnLabel: 'SubLevel 44' },
      ]
    },
    { 
      btnLabel: 'Test four',
      possition: 'right',
      collapsable: true,
      collapsed: true,
      hasSublevel: false,
      dropdownItems: [
        { btnLabel: 'SubLevel 111' },
        { btnLabel: 'SubLevel 222' },
        { btnLabel: 'SubLevel 333' },
        { btnLabel: 'SubLevel 444' },
      ]
    },
    { 
      btnLabel: 'Test five',
      possition: 'right',
      collapsable: true,
      collapsed: true,
      hasSublevel: false,
      labelClassList: ['highlight']
    },
    { 
      btnLabel: 'Test six',
      possition: 'right',
      collapsable: true,
      collapsed: true,
      hasSublevel: false,
      labelClassList: ['highlight']
    },
    { 
      btnLabel: 'Test seven',
      possition: 'right',
      collapsable: true,
      collapsed: true,
      hasSublevel: false,
      labelClassList: ['highlight']
    },
  ]
};

export const ListOfTwoLevelsDropdownData: Array<Dropdown> = [
  {
    btnLabel: 'Click one',
    possition: 'bottom',
    collapsed: true,
    hasSublevel: false,
    dropdownItems: [
      { btnLabel: 'SubLevel 1' },
      { btnLabel: 'SubLevel 2' },
      { btnLabel: 'SubLevel 3' },
      { btnLabel: 'SubLevel 4' },
      { btnLabel: 'SubLevel 5' },
    ]
  },
  {
    btnLabel: 'Click two',
    possition: 'bottom',
    collapsed: true,
    hasSublevel: false,
    dropdownItems: [
      { btnLabel: 'SubLevel 1' },
      { btnLabel: 'SubLevel 2' },
      { btnLabel: 'SubLevel 3' },
      { btnLabel: 'SubLevel 4' },
      { btnLabel: 'SubLevel 5' },
    ]
  },
];
