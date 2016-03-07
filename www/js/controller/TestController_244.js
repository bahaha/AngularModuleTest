module.exports= function($scope, $state, TestService){
		console.log('enter controller_244')
		$scope.test = TestService.getTest()
	}
