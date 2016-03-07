module.exports= function($scope, $state, TestService){
		console.log('enter controller_120')
		$scope.test = TestService.getTest()
	}
