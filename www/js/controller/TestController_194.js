module.exports= function($scope, $state, TestService){
		console.log('enter controller_194')
		$scope.test = TestService.getTest()
	}
