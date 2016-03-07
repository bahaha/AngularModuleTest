module.exports= function($scope, $state, TestService){
		console.log('enter controller_667')
		$scope.test = TestService.getTest()
	}
