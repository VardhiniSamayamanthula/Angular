import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TestComponent } from './test.component';
import { create } from 'domain';
import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

describe("Testing TestComponent",()=>
{
beforeEach(()=>{ //before each run test comp is loaded

TestBed.configureTestingModule({
declarations:[TestComponent]
});
});
let comp:TestComponent
let fixture: ComponentFixture<TestComponent>
it('should create TestComponent',()=>{
comp=TestBed.createComponent(TestComponent).componentInstance;
expect(comp).toBeTruthy();//check whether comp is created or not


});




it('test value of h1 tag',()=>{
    const fixture=TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Hello');
    });
/*
it('test value of h2 tag',()=>{
    const fixture=TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled=fixture.debugElement.nativeElement;
    const comp=fixture.debugElement.componentInstance;
    expect(compiled.querySelector('h2').textContent).toEqual(comp.message);
    });
*/

    it('test injected TestServiceee',()=>{
        const fixture=TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        const compiled=fixture.debugElement.nativeElement;
        const comp=fixture.debugElement.componentInstance;
        let service : TestServiceService = TestBed.get<TestServiceService>(TestServiceService);
        expect(compiled.querySelector('h2').textContent).toEqual("hello world");

        });
    


});