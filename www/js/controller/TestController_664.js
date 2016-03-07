module.exports= function($scope, $state, TestService){
		console.log('enter controller_664')
		$scope.test = TestService.getTest()
	}
