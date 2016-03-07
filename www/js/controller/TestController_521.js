module.exports= function($scope, $state, TestService){
		console.log('enter controller_521')
		$scope.test = TestService.getTest()
	}
