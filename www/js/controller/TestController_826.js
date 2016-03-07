module.exports= function($scope, $state, TestService){
		console.log('enter controller_826')
		$scope.test = TestService.getTest()
	}
