module.exports= function($scope, $state, TestService){
		console.log('enter controller_303')
		$scope.test = TestService.getTest()
	}
