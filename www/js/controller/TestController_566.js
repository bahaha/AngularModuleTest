module.exports= function($scope, $state, TestService){
		console.log('enter controller_566')
		$scope.test = TestService.getTest()
	}
