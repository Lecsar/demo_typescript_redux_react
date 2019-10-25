import { TabTemplate, FieldType, ValidationType } from '../typings';

export const mockTemplate: TabTemplate[] = [
  {
    _id: '1',
    name: 'Общее',
    fields: [
      {
        _id: '1',
        type: FieldType.text,
        label: 'ИНН',
        placeholder: 'Пожалуйста введите ИНН компании',
        size: 3,
        validationRule: {
          required: true,
          type: ValidationType.number
        }
      },
      {
        _id: '2',
        type: FieldType.select,
        label: 'Субъект РФ',
        options: [
          { _id: '1', value: 'RZN', name: 'Рязанская область' },
          { _id: '2', value: 'ORL', name: 'Орловская область' },
          { _id: '3', value: 'TMB', name: 'Тамбовская область' }
        ],
        size: 3
      },
      {
        _id: '3',
        type: FieldType.select,
        label: 'Стадия реализации проекта',
        options: [
          { _id: '1', value: 'Option1', name: 'Option1' },
          { _id: '2', value: 'Option2', name: 'Option2' },
          { _id: '3', value: 'Option3', name: 'Option3' }
        ],
        size: 3,
        validationRule: {
          required: true
        }
      },
      {
        _id: '4',
        type: FieldType.text,
        label: 'ОГРН',
        placeholder: 'Пожалуйста введите ОГРН компании',
        size: 3
      },
      {
        _id: '5',
        type: FieldType.text,
        label: 'ИНН',
        placeholder: 'Пожалуйста введите ИНН компании'
      },
      {
        _id: '6',
        type: FieldType.select,
        label: 'Субъект РФ',
        options: [
          { _id: '1', value: 'RZN', name: 'Рязанская область' },
          { _id: '2', value: 'ORL', name: 'Орловская область' },
          { _id: '3', value: 'TMB', name: 'Тамбовская область' }
        ]
      },
      // {
      //     _id: '7',
      //     type: FieldType.select,
      //     label: 'Стадия реализации проекта',
      //     options: [
      //         {id: '1', value: 'Option1', name: 'Option1'},
      //         {id: '2', value: 'Option2', name: 'Option2'},
      //         {id: '3', value: 'Option3', name: 'Option3'},
      //     ],
      // },
      // {
      //     _id: '8',
      //     type: FieldType.input,
      //     label: 'ОГРН',
      //     placeholder: 'Пожалуйста введите ОГРН компании',
      // },
      // {
      //     _id: '9',
      //     type: FieldType.input,
      //     label: 'ИНН',
      //     placeholder: 'Пожалуйста введите ИНН компании',
      //     size: 4,
      // },
      // {
      //     _id: '10',
      //     type: FieldType.select,
      //     label: 'Субъект РФ',
      //     options: [
      //         {id: '1', value: 'RZN', name: 'Рязанская область'},
      //         {id: '2', value: 'ORL', name: 'Орловская область'},
      //         {id: '3', value: 'TMB', name: 'Тамбовская область'},
      //     ],
      //     size: 4,
      // },
      {
        _id: '11',
        type: FieldType.select,
        label: 'Стадия реализации проекта',
        options: [
          { _id: '1', value: 'Option1', name: 'Option1' },
          { _id: '2', value: 'Option2', name: 'Option2' },
          { _id: '3', value: 'Option3', name: 'Option3' }
        ],
        size: 4
      },
      {
        _id: '12',
        type: FieldType.file,
        label: 'ОГРН',
        size: 12,
        validationRule: {
          required: true
        }
      }
    ]
  },
  {
    _id: '2',
    name: 'Характеристики',
    fields: [
      {
        _id: '1',
        type: FieldType.text,
        label: 'ИНН',
        placeholder: 'Пожалуйста введите ИНН компании',
        size: 3,
        validationRule: {
          required: true,
          type: ValidationType.number
        }
      },
      {
        _id: '2',
        type: FieldType.select,
        label: 'Субъект РФ',
        options: [
          { _id: '1', value: 'RZN', name: 'Рязанская область' },
          { _id: '2', value: 'ORL', name: 'Орловская область' },
          { _id: '3', value: 'TMB', name: 'Тамбовская область' }
        ],
        size: 3
      },
      {
        _id: '3',
        type: FieldType.select,
        label: 'Стадия реализации проекта',
        options: [
          { _id: '1', value: 'Option1', name: 'Option1' },
          { _id: '2', value: 'Option2', name: 'Option2' },
          { _id: '3', value: 'Option3', name: 'Option3' }
        ],
        size: 3,
        validationRule: {
          required: true
        }
      },
      {
        _id: '4',
        type: FieldType.text,
        label: 'ОГРН',
        placeholder: 'Пожалуйста введите ОГРН компании',
        size: 3
      },
      {
        _id: '5',
        type: FieldType.text,
        label: 'ИНН',
        placeholder: 'Пожалуйста введите ИНН компании'
      },
      {
        _id: '6',
        type: FieldType.select,
        label: 'Субъект РФ',
        options: [
          { _id: '1', value: 'RZN', name: 'Рязанская область' },
          { _id: '2', value: 'ORL', name: 'Орловская область' },
          { _id: '3', value: 'TMB', name: 'Тамбовская область' }
        ]
      }
    ]
  },
  {
    _id: '3',
    name: 'Свойства',
    fields: [
      {
        _id: '1',
        type: FieldType.text,
        label: 'ИНН',
        placeholder: 'Пожалуйста введите ИНН компании',
        size: 3,
        validationRule: {
          required: true,
          type: ValidationType.number
        }
      },
      {
        _id: '2',
        type: FieldType.select,
        label: 'Субъект РФ',
        options: [
          { _id: '1', value: 'RZN', name: 'Рязанская область' },
          { _id: '2', value: 'ORL', name: 'Орловская область' },
          { _id: '3', value: 'TMB', name: 'Тамбовская область' }
        ],
        size: 3
      },
      {
        _id: '3',
        type: FieldType.select,
        label: 'Стадия реализации проекта',
        options: [
          { _id: '1', value: 'Option1', name: 'Option1' },
          { _id: '2', value: 'Option2', name: 'Option2' },
          { _id: '3', value: 'Option3', name: 'Option3' }
        ],
        size: 3,
        validationRule: {
          required: true
        }
      }
    ]
  }
];
