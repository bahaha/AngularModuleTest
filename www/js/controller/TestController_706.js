module.exports= function($scope, $state, TestService){
		console.log('enter controller_706')
		$scope.test = TestService.getTest()
	}
