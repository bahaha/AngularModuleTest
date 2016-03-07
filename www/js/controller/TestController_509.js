module.exports= function($scope, $state, TestService){
		console.log('enter controller_509')
		$scope.test = TestService.getTest()
	}
