module.exports= function($scope, $state, TestService){
		console.log('enter controller_911')
		$scope.test = TestService.getTest()
	}
