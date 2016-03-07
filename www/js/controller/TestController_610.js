module.exports= function($scope, $state, TestService){
		console.log('enter controller_610')
		$scope.test = TestService.getTest()
	}
