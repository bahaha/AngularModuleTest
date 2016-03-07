module.exports= function($scope, $state, TestService){
		console.log('enter controller_221')
		$scope.test = TestService.getTest()
	}
