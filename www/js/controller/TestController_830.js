module.exports= function($scope, $state, TestService){
		console.log('enter controller_830')
		$scope.test = TestService.getTest()
	}
