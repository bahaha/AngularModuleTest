module.exports= function($scope, $state, TestService){
		console.log('enter controller_525')
		$scope.test = TestService.getTest()
	}
