angular.module('employeeApp' ,[])
	.factory('empFactory',[function(){
  	return function Employee(name, title, salary){
      this.name = name;
      this.title = title;
      this.salary = salary;
      this.status = 'full-time';
        
      this.printEmployeeForm = function () {
				var empForm = 
        'name: ' + this.name + '\n' +
        'Job title: ' + this.title + '\n' +
        'salary: ' + this.salary + '\n' +
        'status: ' + this.status;
				console.log(empForm);
      }
    }
  }])

	.controller("main",['$scope','empFactory',function($scope, empFactory) {
		  $scope.employees =[];
        
        $scope.addEmp = function(name, title, salary){
            var employee = new empFactory(name, title, salary)
            $scope.employees.push(employee);
        }
        $scope.printAll = function (){
            $scope.employees.map(function(employee) {
                employee.printEmployeeForm()
            })
        }
  }])