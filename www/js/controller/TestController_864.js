module.exports= function($scope, $state, TestService){
		console.log('enter controller_864')
		$scope.test = TestService.getTest()
	}
