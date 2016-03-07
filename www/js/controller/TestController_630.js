module.exports= function($scope, $state, TestService){
		console.log('enter controller_630')
		$scope.test = TestService.getTest()
	}
