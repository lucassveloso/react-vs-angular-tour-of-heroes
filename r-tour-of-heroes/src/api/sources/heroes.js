import request from '../request';
import { API } from '../../config';

export default {
  all: () => request.get(`${API}/heroes`),
  find: (id) => request.get(`${API}/hero/${id}`),
  update: (data) => request.put(`${API}/hero`, data),
  store: (data) => request.post(`${API}/hero`, data),
  destroy: (id) => request.delete(`${API}/hero/${id}`),
  search: (term) => request.get(`${API}/heroes?name=${term}`),
};
