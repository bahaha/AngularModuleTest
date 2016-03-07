module.exports= function($scope, $state, TestService){
		console.log('enter controller_829')
		$scope.test = TestService.getTest()
	}
