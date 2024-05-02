import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  productForm!: FormGroup;
  checkboxForm!: FormGroup;

  constructor(private http : HttpClient , private fb: FormBuilder){
    http.get("http://localhost:8080/v1/categories",{
      headers : {
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNzAzODU4NTQ0LCJpYXQiOjE3MDEyNjY1NDQsInJvbGVzIjpbIkNVU1RPTUVSIl19.a_jJsCeOz2l4A_j7AoaY172b3aQ2kpUKKG50q1yl26s"
      }
    })
    .subscribe({
      next : (res : any) => {
        console.log(res);
        this.categories = res;
      },
      error : err => {
        console.log(err);
      }
    })
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: '',
      colors: this.fb.array(["red","blue","gray"]),
      sizes: this.fb.array(["XL","M","S"])
    });

    //

    this.checkboxForm = this.fb.group({
      colors: this.fb.group({
        red: false,
        blue: false,
        green: false
      }),
      sizes: this.fb.group({
        small: false,
        medium: false,
        large: false
      })
    });
  }

  get colorArray() {
    return this.productForm.get('colors') as FormArray;
  }

  get sizeArray() {
    return this.productForm.get('sizes') as FormArray;
  }

  addColor() {
    this.colorArray.push(this.fb.control(''));
  }

  removeColor(index: number) {
    this.colorArray.removeAt(index);
  }

  addSize() {
    this.sizeArray.push(this.fb.control(''));
  }

  removeSize(index: number) {
    this.sizeArray.removeAt(index);
  }

  getColorsControl(index: number): FormControl {
    return this.colorArray.controls[index] as FormControl;
  }

  getSizeControl(index: number): FormControl {
    return this.sizeArray.controls[index] as FormControl;
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.checkboxForm.value);
    const selectedColors = this.getSelectedItems(this.checkboxForm.get('colors'));
    const selectedSizes = this.getSelectedItems(this.checkboxForm.get('sizes'));

    // You can now use selectedColors and selectedSizes as needed (e.g., display or send to the server)
    console.log('Selected Colors:', selectedColors);
    console.log('Selected Sizes:', selectedSizes);
  }

  private getSelectedItems(formGroup: any) {
    return Object.keys(formGroup.value).filter(key => formGroup.value[key]);
  }



  categories = [
    { id: 1, categoryName: 'Category 1' },
    { id: 2, categoryName: 'Category 2' },
    { id: 4, categoryName: 'Category 4' },
    { id: 3, categoryName: 'Category 3' }
  ];

  toggleActivation(category: any): void {
    category.isActive = !category.isActive;
  }
}
