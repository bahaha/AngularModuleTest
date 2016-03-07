module.exports= function($scope, $state, TestService){
		console.log('enter controller_810')
		$scope.test = TestService.getTest()
	}
