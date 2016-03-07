module.exports= function($scope, $state, TestService){
		console.log('enter controller_445')
		$scope.test = TestService.getTest()
	}
