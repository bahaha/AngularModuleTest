module.exports= function($scope, $state, TestService){
		console.log('enter controller_867')
		$scope.test = TestService.getTest()
	}
