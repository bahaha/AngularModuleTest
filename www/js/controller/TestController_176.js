module.exports= function($scope, $state, TestService){
		console.log('enter controller_176')
		$scope.test = TestService.getTest()
	}
