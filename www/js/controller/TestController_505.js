module.exports= function($scope, $state, TestService){
		console.log('enter controller_505')
		$scope.test = TestService.getTest()
	}
