module.exports= function($scope, $state, TestService){
		console.log('enter controller_649')
		$scope.test = TestService.getTest()
	}
