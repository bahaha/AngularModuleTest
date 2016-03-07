module.exports= function($scope, $state, TestService){
		console.log('enter controller_859')
		$scope.test = TestService.getTest()
	}
