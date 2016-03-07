module.exports= function($scope, $state, TestService){
		console.log('enter controller_45')
		$scope.test = TestService.getTest()
	}
