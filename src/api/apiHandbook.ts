import { get } from 'lodash';
import { API_ADRESS } from 'const';
import { callAPI } from './apiFetch';

class ApiHandbooks {
  private cache: { [handbookId: string]: Promise<any[]> };

  constructor() {
    this.cache = {};
  }

  getHandbookFromAPI = (handbookId: string) =>
    callAPI(`${API_ADRESS}/handbooks/${handbookId}`)
      .then(res => res.json())
      .then(data => get(data, 'options', []))
      .catch(error => {
        console.error(error);
        console.error(`Ошибка при загрузке справочника ${handbookId}`);

        return [];
      });

  getHandbook = (handbookId: string) => {
    const { cache } = this;

    if (!(handbookId in cache)) {
      cache[handbookId] = this.getHandbookFromAPI(handbookId);
    }

    return cache[handbookId].then(options => {
      if (options.length) {
        return options;
      } else {
        cache[handbookId] = this.getHandbookFromAPI(handbookId);
        return cache[handbookId];
      }
    });
  };
}

export const apiHandbooks = new ApiHandbooks();
