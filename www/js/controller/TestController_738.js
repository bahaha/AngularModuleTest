module.exports= function($scope, $state, TestService){
		console.log('enter controller_738')
		$scope.test = TestService.getTest()
	}
