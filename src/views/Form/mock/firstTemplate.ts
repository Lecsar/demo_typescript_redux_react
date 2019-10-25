export const firstTemplate = {
  name: 'test form',
  userId: '44fab3ac-7495-4aa5-aefc-907ba33ea3c6',
  orgId: 'd2b44fdb-cb3a-4591-9531-c2dcfa5a278b',
  tabs: [
    {
      name: 'Общие данные',
      fields: [
        {
          type: 'Text',
          label: 'Полное название Проектной компании на русском языке',
          order: 1,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'ИНН',
          order: 2,
          placeholder: 'Пожалуйста введите ИНН компании',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'ОГРН',
          order: 3,
          placeholder: 'Пожалуйста введите ОГРН компании',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Select',
          label: 'Тип проекта',
          size: 3,
          order: 4,
          options: [
            {
              value: 'T1',
              name: '1.Транспортировка и распределение газа'
            },
            {
              value: 'T2',
              name: '2.Аэропорты'
            },
            {
              value: 'T3',
              name: '3.Порты'
            },
            {
              value: 'T4',
              name: '4.Железные дороги'
            }
          ]
        },
        {
          type: 'Select',
          label: 'Отрасль проекта',
          size: 3,
          order: 5,
          options: [
            {
              value: 'O1',
              name:
                '1.Проект работающий в особом регуляторном режиме благоприятствования/защиты'
            },
            {
              value: 'O2',
              name:
                '2.Отрали,связанные с крупной инфраструктурой (не ГЧП, рыночный риск спроса и т. д.)'
            },
            {
              value: 'O3',
              name: '3. СПГ и нефть'
            },
            {
              value: 'O4',
              name: '4. Энергетика/ресурсы ( добычка ископаемых и.т.д.)'
            },
            {
              value: 'O5',
              name:
                '5.Обслуживание/предоставление услуг (основан на рыночном спросе, без особого регуляторного режима благоприятствования, не ГЧП)'
            },
            {
              value: 'O6',
              name: '6.ГЧП с поддержкой на основе эксплуатационной доступности'
            },
            {
              value: 'O7',
              name:
                '7.Другое (в случае выбора данного варианта, необходимо самостоятельно охарактеризовать тип проекта)'
            }
          ]
        },
        {
          type: 'Select',
          label: 'Субъект РФ',
          size: 3,
          order: 6,
          options: [
            {
              value: 'O1',
              name: 'Республика Бурятия'
            },
            {
              value: 'O2',
              name: 'Республика Алтай'
            }
          ]
        },
        {
          type: 'Select',
          label: 'Стадия реализации проекта',
          size: 3,
          order: 7,
          options: [
            {
              value: 'O1',
              name: '1.Операционная стадия '
            },
            {
              value: 'O2',
              name: '2.Строительная стадия'
            },
            {
              value: 'O3',
              name:
                '3. Переходный период (проект находится на операционной стадии, однако не вышел на плановую мощность)'
            }
          ]
        },
        {
          type: 'Select',
          label: 'Стадия реализации проекта',
          size: 3,
          order: 7,
          options: [
            {
              value: 'O1',
              name: '1.Операционная стадия '
            },
            {
              value: 'O2',
              name: '2.Строительная стадия'
            },
            {
              value: 'O3',
              name:
                '3. Переходный период (проект находится на операционной стадии, однако не вышел на плановую мощность)'
            }
          ]
        },
        {
          type: 'Text',
          label: 'Производительность Проектной компании',
          order: 8,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Единицы измерения производительности',
          order: 9,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Select',
          label:
            'Проект реализуется  в рамках Федерального закона от 13.07.2015 г. №224-ФЗ О государственно-частном партнерстве, муниципально-частном партнерстве в Российской Федерации и внесени изменений в отдельные законодательные акты Российской Федерации',
          size: 3,
          order: 10,
          options: [
            {
              value: 'O1',
              name: 'Да'
            },
            {
              value: 'O2',
              name: 'Нет'
            }
          ]
        },
        {
          type: 'Select',
          label:
            'Проект реализуется на основе Федерального закона от 21.07.2005 г. № 115-ФЗ О консессионных соглашениях',
          size: 3,
          order: 11,
          options: [
            {
              value: 'O1',
              name: 'Да'
            },
            {
              value: 'O2',
              name: 'Нет'
            }
          ]
        },
        {
          type: 'Date',
          label:
            'Дата подписания концессионного соглашения (далее - КС)/ соглашения о государственно-частном партнерстве (далее - СГЧП)',
          order: 12,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Date',
          label: 'Дата окончания КС/СГЧП',
          order: 13,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Концедент',
          size: 3,
          order: 14,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Полное название концессионера',
          order: 15,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'ИНН концессионера',
          order: 16,
          placeholder: 'Пожалуйста введите ИНН концессионера',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Полное название генерального подрядчика',
          order: 17,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'ИНН генерального подрядчика',
          order: 18,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Полное название Оператора',
          order: 19,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'ИНН оператора',
          order: 20,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Юридический адрес Проектной компании',
          order: 21,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Фактический адрес Проектной компании',
          order: 22,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Телефон',
          order: 23,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Корпоративный интернет-сайт',
          order: 24,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Date',
          label: 'Дата заполнения анкеты',
          order: 25,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Date',
          label:
            'Последняя отчетная дата* (* Дата, на которую  Проектной компанией выпущена самая актуальная отчетность по МСФО/US Gaap/ РСБУ)',
          order: 26,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Единица измерения отчетности',
          order: 27,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        }
      ]
    },
    {
      name: 'Контактные лица',
      fields: [
        {
          type: 'Text',
          label: 'Должность',
          order: 1,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Имя/Фамилия',
          order: 2,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Телефон',
          order: 3,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Электронная почта',
          order: 4,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Должность',
          order: 5,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Имя/Фамилия',
          order: 6,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Телефон',
          order: 7,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'Number'
          }
        },
        {
          type: 'Text',
          label: 'Электронная почта',
          order: 8,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        }
      ]
    },
    {
      name: 'Показатели строительной фазы',
      fields: [
        {
          type: 'Text',
          label: '1.0. Геоморфологические характеристики Проекта',
          order: 1,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Приложите подтверждающий документ',
          order: 2,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Ссылка в документе',
          order: 3,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: '1.1. Геологические характеристики Проекта',
          order: 4,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Приложите подтверждающий документ',
          order: 5,
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        },
        {
          type: 'Text',
          label: 'Ссылка в документе',
          order: 6,
          placeholder: '',
          size: 3,
          validationRule: {
            required: 'true',
            type: 'String'
          }
        }
      ]
    }
  ]
};
