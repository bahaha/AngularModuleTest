module.exports= function($scope, $state, TestService){
		console.log('enter controller_785')
		$scope.test = TestService.getTest()
	}
