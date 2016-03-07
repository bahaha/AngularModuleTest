module.exports= function($scope, $state, TestService){
		console.log('enter controller_266')
		$scope.test = TestService.getTest()
	}
