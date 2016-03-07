module.exports= function($scope, $state, TestService){
		console.log('enter controller_827')
		$scope.test = TestService.getTest()
	}
