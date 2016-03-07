module.exports= function($scope, $state, TestService){
		console.log('enter controller_784')
		$scope.test = TestService.getTest()
	}
