module.exports= function($scope, $state, TestService){
		console.log('enter controller_634')
		$scope.test = TestService.getTest()
	}
