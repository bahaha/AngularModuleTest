module.exports= function($scope, $state, TestService){
		console.log('enter controller_220')
		$scope.test = TestService.getTest()
	}
