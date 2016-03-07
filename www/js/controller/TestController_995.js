module.exports= function($scope, $state, TestService){
		console.log('enter controller_995')
		$scope.test = TestService.getTest()
	}
