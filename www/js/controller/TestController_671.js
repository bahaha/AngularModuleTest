module.exports= function($scope, $state, TestService){
		console.log('enter controller_671')
		$scope.test = TestService.getTest()
	}
