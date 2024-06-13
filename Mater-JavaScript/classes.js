class Employee {
    employeeName = 'veeramani';

    print() {
        console.log(`hello ${this.employeeName}`);
    }
}

let employee = new Employee();
employee.employeeName = 'Veeramani Marimuthu';
employee.print(); 