import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiUrl+"v1/subcategories";

  getSubcategories() {
    return this.http.get(this.baseUrl);
  }

  addSubcategory(subcategorie: any) {
    return this.http.post(this.baseUrl, subcategorie);
  }

  getSubcategoryById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateSubcategory(id: number, subcategories: any) {
    return this.http.put(`${this.baseUrl}/${id}`, subcategories);
  }

  deleteSubcategory(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  searchForSubcategories(keyword: string) {
    return this.http.get(`${this.baseUrl}/search?keyword=${keyword}`);
  }


}
