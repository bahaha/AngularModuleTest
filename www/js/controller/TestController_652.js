module.exports= function($scope, $state, TestService){
		console.log('enter controller_652')
		$scope.test = TestService.getTest()
	}
