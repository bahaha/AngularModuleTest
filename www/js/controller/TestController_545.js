module.exports= function($scope, $state, TestService){
		console.log('enter controller_545')
		$scope.test = TestService.getTest()
	}
