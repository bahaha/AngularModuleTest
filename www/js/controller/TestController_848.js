module.exports= function($scope, $state, TestService){
		console.log('enter controller_848')
		$scope.test = TestService.getTest()
	}
